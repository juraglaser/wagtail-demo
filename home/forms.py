from django import forms

class PagingForm(forms.Form):
    name = forms.CharField(label='Filter by employee name', required=False)
    items_count = forms.IntegerField(label='Max number of records to display', required=False)
    # items_start = forms.IntegerField(label='Records starting from')
