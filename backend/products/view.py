# from rest_framework.authentication import TokenAuthentication
# from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse
from .models import Stock
# from rest_framework import permissions
from rest_framework.decorators import api_view
from django.core import serializers



# class BaseView(APIView):
#     authentication_classes = [TokenAuthentication,]
#     permission_classes = [permissions.IsAuthenticated,]
    
# class StockView(BaseView):
#     # This view will automatically apply TokenAuthentication
    
#     def get(self, request):
#        st = [stock.id for stock in Stock.objects.all]
#        return Response(st)
 
#     def post(self, request):
#         pass
    
    
@api_view(['GET', 'POST'])
def getStock(request):
    
    if request.method == 'GET':
        qs= Stock.objects.all()
        qs_json = serializers.serialize('json', qs)
        # st = [stock.id for stock in Stock.objects.all]
        return HttpResponse(qs_json, content_type='application/json')
    
    elif request.method == 'POST':
        pass
    
    