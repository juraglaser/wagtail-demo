from django.http import HttpResponseRedirect
from django.shortcuts import render

from .forms import PagingForm


def get_employees(request):
    if request.method == 'POST':
        form = PagingForm(request.POST)
    else:
        form = PagingForm()

    #return render(request, '/employee-list/', {'form': form})
    return HttpResponseRedirect(reversed(''), kwargs={'item_count': 10, 'item_start': 20})