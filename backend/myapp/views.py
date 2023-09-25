from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from coastsat import SDS_download,test
import ast


@csrf_exempt
def my_function(request):
    # Check if the request method is POST
    # imagelist=test.lol()
    # print(imagelist)
    parameters={}
    if request.method == 'POST':
        # Get the data from the request body
        data = json.loads(request.body)
        # Extract the parameters from the data
        polygon = data.get('polygon')
        dates = data.get('dates')
        collection = data.get('collection')
        # polygon = ast.literal_eval(polygon)
        # dates=ast.literal_eval(dates)
        parameters['polygon']=polygon
        parameters['dates']=dates
        parameters['collection']=collection
        imagelist=test.lol(parameters)
        # Create a JSON response
        print(JsonResponse(imagelist,safe=False))
        # Return the JSON response
        return JsonResponse(imagelist,safe=False)
    # Return an error response if the request method is not allowed
    return JsonResponse({'error': 'Method not allowed'}, status=405)
