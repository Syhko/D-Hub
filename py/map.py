#%%
import matplotlib.pyplot as plt;
import pandas as pd;
df=pd.read_json("geodata.json")
from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt
import numpy as np
#%%

color='#Ff2f0f80'
plt.scatter(df.lat, df.lng,color=[[250,0,0,20]]) 
plt.colorbar()
plt.show()  

# %%
