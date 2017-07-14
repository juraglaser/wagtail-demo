from __future__ import absolute_import, unicode_literals

from django.db import models
from multiprocessing import get_context
from wagtail.wagtailadmin.edit_handlers import FieldPanel
from wagtail.wagtailcore.fields import RichTextField

from wagtail.wagtailcore.models import Page

from home.forms import PagingForm


class HomePage(Page):
    body = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('body', classname="full"),
    ]


class EmployeePage(Page):
    body = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('body', classname="full"),
    ]

    def get_context(self, request):
        # Update context to include first 100 employees
        context = super(EmployeePage, self).get_context(request)
        context['employee_list'] = Employee.objects.all().select_related()[:100]
        context['form'] = PagingForm()
        return context


class DepartmentPage(Page):
    body = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('body', classname="full"),
    ]

    def get_context(self, request):
        # Update context to include department list
        context = super(DepartmentPage, self).get_context(request)
        context['department_list'] = Department.objects.all().order_by('dept_no')
        return context


class ManagerPage(Page):
    body = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('body', classname="full"),
    ]


# Model generated from an existing database

class Employee(models.Model):
    emp_no = models.IntegerField(primary_key=True)
    birth_date = models.DateField()
    first_name = models.CharField(max_length=14)
    last_name = models.CharField(max_length=16)
    gender = models.CharField(max_length=1)
    hire_date = models.DateField()

    class Meta:
        managed = False
        db_table = 'employees'


class Department(models.Model):
    dept_no = models.CharField(primary_key=True, max_length=4)
    dept_name = models.CharField(unique=True, max_length=40)

    class Meta:
        managed = False
        db_table = 'departments'


class DeptEmp(models.Model):
    emp_no = models.ForeignKey('Employee', models.DO_NOTHING, db_column='emp_no', primary_key=True)
    dept_no = models.ForeignKey(Department, models.DO_NOTHING, db_column='dept_no')
    from_date = models.DateField()
    to_date = models.DateField()

    class Meta:
        managed = False
        db_table = 'dept_emp'
        unique_together = (('emp_no', 'dept_no'),)


class DeptManager(models.Model):
    emp_no = models.ForeignKey('Employee', models.DO_NOTHING, db_column='emp_no', primary_key=True)
    dept_no = models.ForeignKey(Department, models.DO_NOTHING, db_column='dept_no')
    from_date = models.DateField()
    to_date = models.DateField()

    class Meta:
        managed = False
        db_table = 'dept_manager'
        unique_together = (('emp_no', 'dept_no'),)


class Salary(models.Model):
    emp_no = models.ForeignKey(Employee, models.DO_NOTHING, db_column='emp_no', primary_key=True)
    salary = models.IntegerField()
    from_date = models.DateField()
    to_date = models.DateField()

    class Meta:
        managed = False
        db_table = 'salaries'
        unique_together = (('emp_no', 'from_date'),)


class Title(models.Model):
    emp_no = models.ForeignKey(Employee, models.DO_NOTHING, db_column='emp_no', primary_key=True)
    title = models.CharField(max_length=50)
    from_date = models.DateField()
    to_date = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'titles'
        unique_together = (('emp_no', 'title', 'from_date'),)