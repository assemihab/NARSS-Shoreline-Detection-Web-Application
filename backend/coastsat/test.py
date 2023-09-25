import os
import numpy as np
import pickle
import warnings
warnings.filterwarnings("ignore")
import matplotlib.pyplot as plt
from matplotlib import gridspec
plt.ion()
import pandas as pd
from datetime import datetime, timedelta
from coastsat import SDS_download,SDS_tools

def lol(parameters):


    polygonn=parameters["polygon"]
    polygon = [[[float(coord) for coord in point] for point in poly] for poly in polygonn]
    polygon = SDS_tools.smallest_rectangle(polygon)


    sat_list = ['S2']
    collection = 'C02'

    collection=parameters["collection"]
    collection = collection.strip("'")

    dates = ['2017-12-01', '2018-01-01']
    # print("the first date element: ",dates[0])
    # print("the first date elementtype: ",type(dates[0]))
    dates=parameters["dates"]
    
    # print("the second date element: ",dates[0])
    # print("the second date elementtype: ",type(dates[0]))

    sitename = 'NARRA'
    filepath = os.path.join(os.getcwd(), 'data')

    inputs = {'polygon': polygon, 'dates': dates, 'sat_list': sat_list, 'sitename': sitename, 'filepath':filepath,
             'landsat_collection': collection}

    SDS_download.check_images_available(inputs)


    imagelist = SDS_download.retrieve_images(inputs)
    return imagelist