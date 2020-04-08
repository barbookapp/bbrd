from pyspark.ml import Pipeline
from pyspark.ml.feature import HashingTF, MinHashLSH
import pyspark.sql.functions as f
import difflib
import csv
import itertools
import pandas as pd
import numpy as np
import re

from sklearn.linear_model import LinearRegression
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction.text import CountVectorizer

from scipy.spatial.distance import pdist
from scipy.spatial.distance import squareform

from sklearn.metrics import pairwise_kernels
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.metrics.pairwise import linear_kernel

from sklearn.metrics.pairwise import pairwise_distances

from sklearn.linear_model import LogisticRegression
import scipy.sparse as sp

from difflib import SequenceMatcher


class RecModel():
    df = pd.read_csv('/Users/Josh/Dev/barbookdb.csv')

    summary = pd.get_dummies(
        df, columns=['primary', 'secondary', 'cat', 'age', 'abv', 'country', 'sub'])
    summary = summary.set_index('name')
    sumIndex = summary.copy()
    sumIndex

    prim = sumIndex.filter(
        regex="primary_*") * np.array([1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5])
    sec = sumIndex.filter(regex="secondary_*") * \
        np.array([.75, .75, .75, .75, .75, .75, .75, .75, .75])
    sub = sumIndex.filter(regex="sub_*") * \
        np.array([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, ])
    cat = sumIndex.filter(regex="cat_*") * \
        np.array([3, 3, 3, 3, 3, 3, 3, 3, 3, 3])

    primary = sumIndex.filter(regex='primary_*').columns
    sumIndex[primary] = sumIndex[primary] * \
        np.array([1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5])
    secondary = sumIndex.filter(regex='secondary_*').columns
    sumIndex[secondary] = sumIndex[secondary] * \
        np.array([.75, .75, .75, .75, .75, .75, .75, .75, .75])
    subcategory = sumIndex.filter(regex='sub_*').columns
    sumIndex[subcategory] = sumIndex[subcategory] * \
        np.array([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, ])
    category = sumIndex.filter(regex='cat_*').columns
    sumIndex[category] = sumIndex[category] * \
        np.array([3, 3, 3, 3, 3, 3, 3, 3, 3, 3])

    def make_sim_matrix(sco_data):
        df2 = sco_data.copy()

        sim_matrix = pairwise_distances(df2, df2, metric='euclidean')

        # convert to a readable DF
        sim_df = pd.DataFrame(sim_matrix, index=df2.index, columns=df2.index)

        return sim_df

    def recommend(scotch_list, sco_df=sumIndex, info_df=summary):
        # call make sim function
        df2 = make_sim_matrix(sco_data=sumIndex,)
        input_scotch = df2.loc[scotch_list].T
        input_scotch['total'] = input_scotch.sum(axis=1)
        input_scotch.drop(scotch_list, axis=0, inplace=True)

        recommendations = input_scotch.sort_values(by='total',).head().index

        return info_df.loc[recommendations]
