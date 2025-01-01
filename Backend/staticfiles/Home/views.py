from django.shortcuts import render

from Home.serializers import Backend_Skill_Serializer, CurrentAddress_Serializer, Frontend_Skill_Serializer, Project_Serializer
from Home.models import Backend_Skill, CurrentAddress, Frontend_Skill, Project
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.


# views for project model and serializer
@api_view()
def Project_View(request):
    queryset = Project.objects.all()
    serializer = Project_Serializer(queryset, many=True)
    return Response(
        {"data" : serializer.data}
        )


# views for Frontend model and serializer
@api_view()
def Frontend_Skill_View(request):
    queryset = Frontend_Skill.objects.all()
    serializer = Frontend_Skill_Serializer(queryset, many=True)
    return Response(
        {"data" : serializer.data}
        )


# views for Backend model and serializer
@api_view()
def Backend_Skill_View(request):
    queryset = Backend_Skill.objects.all()
    serializer = Backend_Skill_Serializer(queryset, many=True)
    return Response(
        {"data" : serializer.data}
        )


# views for CurrentAddress model and serializer
@api_view()
def CurrentAddress_View(request):
    queryset = CurrentAddress.objects.all()
    serializer = CurrentAddress_Serializer(queryset, many=True)
    return Response(
        {"data" : serializer.data}
        )