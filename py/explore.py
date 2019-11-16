#%%
import pandas as pd
import seaborn as sns
#%% load data

df= pd.read_csv('./py/olist_classified_public_dataset.csv')

# %%

print(df.head())
df['ftv'] = df.apply(lambda row: row.order_freight_value / 
                                  row.order_products_value, axis = 1) 

df2=df[df["ftv"]<2.0]
# %%


df50=df[df["ftv"]>0.3]
print(df50.head())
product_value_counts=df50['product_category_name'].value_counts()

#%%
scores=df50['review_score'].value_counts()
#%%
print(product_value_counts)
print(scores)



# %%

import matplotlib

params = {'axes.titlesize':'5',
          'xtick.labelsize':'10',
          'ytick.labelsize':'10'}
matplotlib.rcParams.update(params)

df3=df2.groupby('product_category_name').filter(lambda x : len(x)>0)

# pd.DataFrame.hist(df3,"ftv","product_category_name",bins=100)

# %%

sns.set(style="white", context="talk")

x = pd.Series(df3.ftv, name="Freight cost/Product price")

ax = sns.distplot(x,bins=50,kde=False,kde_kws=dict(cumulative=True),hist_kws=dict(cumulative=True))




# %%
