from django import forms

class PagingForm(forms.Form):
    items_count = forms.IntegerField(label='Number of records to display')
    items_start = forms.IntegerField(label='Records starting from')