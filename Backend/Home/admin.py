from django.contrib import admin

from Home.models import Backend_Skill, CurrentAddress, Download, Frontend_Skill, Project, Service, Technology

# Register your models here.

class ProjectAdmin(admin.ModelAdmin):
    list_display = ['name', 'website_type']
    search_fields = ['name', 'tech_stack__name']  # Search by technology name
    filter_horizontal = ('tech_stack',)  # Display tech_stack as a horizontal multi-select widget

admin.site.register(Project, ProjectAdmin)
admin.site.register(Technology)

admin.site.register(Frontend_Skill)
admin.site.register(Backend_Skill)
admin.site.register(CurrentAddress)
admin.site.register(Download)
admin.site.register(Service)
