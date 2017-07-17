from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from .forms import PagingForm


def get_employees(request):
    if request.method == 'POST':
        form = PagingForm(request.POST)
    else:
        form = PagingForm()

    #return render(request, '/employee-list/', {'form': form})
    return HttpResponseRedirect(reverse('home:employee_page'), kwargs={'item_count': 10, 'item_start': 20})