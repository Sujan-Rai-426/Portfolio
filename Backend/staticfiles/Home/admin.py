from django.contrib import admin

from Home.models import Backend_Skill, CurrentAddress, Frontend_Skill, Project

# Register your models here.
admin.site.register(Project)
admin.site.register(Frontend_Skill)
admin.site.register(Backend_Skill)
admin.site.register(CurrentAddress)
