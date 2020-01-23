import numpy as np
import pandas as pd
from sklearn.cluster import KMeans
import json


def find_locations(prices, max_clusters, money):
    centers = {}
    costs = {}
    amounts = {}

    max_cost = 0
    max_amount = df['type'].value_counts().max()
    max_price = max(prices.values())

    min_loss = np.inf

    for types in range(1, 6):
        centers[types] = {}
        costs[types] = {}

        temp = df[df['type'] == types][['lat', 'lon']]
        costs[types][0] = 0
        amounts[types] = len(temp)

        for clusters in range(1, max_clusters + 1):
            kmeans = KMeans(n_clusters=clusters, init='k-means++').fit(temp)
            centers[types][clusters] = kmeans.cluster_centers_
            costs[types][clusters] = kmeans.inertia_

    a = 2.2
    min_loss = np.inf
    for i1 in range(max_clusters + 1):
        for i2 in range(max_clusters + 1):
            for i3 in range(max_clusters + 1):
                for i4 in range(max_clusters + 1):
                    for i5 in range(max_clusters + 1):
                        tot_price = (i1 * prices[1] + i2 * prices[2] + i3 * prices[3] + i4 * prices[4] + i5 * prices[5])
                        if (tot_price < 0.9 * money) or (tot_price > 1.1 * money):
                            continue
                        calc = costs[1][i1] * (i1 ** a) / amounts[1] * prices[1] + costs[2][i2] * (i2 ** a) / amounts[
                            2] * prices[2] + \
                               costs[3][i3] * (i3 ** a) / amounts[3] * prices[3] + costs[4][i4] * (i4 ** a) / amounts[
                                   4] * prices[4] + \
                               costs[5][i5] * (i5 ** a) / amounts[5] * prices[5]

                        if calc < min_loss:
                            min_loss = calc
                            clusters = (i1, i2, i3, i4, i5)

    return clusters, centers


def return_locations(clusters, centers):
    centers_list = []
    types_dict = {1: 'glass', 2: 'plastic', 3: 'carton', 4: 'clothes', 5: 'energy'}
    for types in range(1, 6):
        curr_center_list = centers[types][clusters[types - 1]].tolist()
        for j in range(len(curr_center_list)):
            center_dict = {'lat': curr_center_list[j][0],
                           'lng': curr_center_list[j][1],
                           'type': types_dict[types]}
            centers_list.append(center_dict)
    locations_json = json.dumps(centers_list)
    return locations_json


df = pd.read_csv('history.csv')
prices = {1: 500, 2: 700, 3: 1000, 4: 100, 5: 800}
max_clusters = 20
money = 15000
clusters, centers = find_locations(prices, max_clusters, money)
locations_json = return_locations(clusters, centers)
# print(locations_json)
