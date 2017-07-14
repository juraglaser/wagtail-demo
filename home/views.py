from rest_framework import generics

from home.models import Employee


class EmployeeCollection(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    # serializer_class = PostSerializer