from django.shortcuts import render

from Home.serializers import Backend_Skill_Serializer, CurrentAddress_Serializer, Download_Serializer, Frontend_Skill_Serializer, Project_Serializer, Service_Serializer
from Home.models import Backend_Skill, CurrentAddress, Download, Frontend_Skill, Project, Service
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.mail import send_mail
from rest_framework import status


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


# views for Download model and serializer
@api_view()
def Download_View(request):
    queryset = Download.objects.all()
    serializer = Download_Serializer(queryset, many=True)
    return Response(
        {"data" : serializer.data}
        )


# views for Service model and serializer
@api_view()
def Service_View(request):
    queryset = Service.objects.all()
    serializer = Service_Serializer(queryset, many=True)
    return Response(
        {"data" : serializer.data}
        )


# views for Contact model and serializer
@api_view(['POST'])
def contact_form_view(request):
    # Get the data from the request
    name = request.data.get('name')
    email = request.data.get('email')
    message = request.data.get('message')

    # Email configuration (make sure SMTP is configured in settings.py)
    try:
        send_mail(
            subject=f"Contact Form Message from {name}",
            message=message,
            from_email=email,
            recipient_list=['your_email@example.com'],  # Your email here
            fail_silently=False
        )
        return Response({"message": "Message sent successfully!"}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)