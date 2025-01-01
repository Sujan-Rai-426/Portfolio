
# Manually created file to serialize
from rest_framework import serializers
from .models import Contact, Download, Project, Frontend_Skill, Backend_Skill, CurrentAddress, Service, Technology

#  Serializer class for the Download model
class Technology_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = '__all__'

# Peoject Serializer for project model
class Project_Serializer(serializers.ModelSerializer):
    tech_stack = Technology_Serializer(many=True)  # Serialize the 'tech_stack' as a list of technology names
    class Meta:
        model = Project
        fields = '__all__'

# serializer class for model Frontend_Skill 
class Frontend_Skill_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Frontend_Skill
        fields = '__all__'

#  serializer class for model Backend_Skill
class Backend_Skill_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Backend_Skill
        fields = '__all__'

#  Serializer class for the CurrentAddress model
class CurrentAddress_Serializer(serializers.ModelSerializer):
    class Meta:
        model = CurrentAddress
        fields = '__all__'

#  Serializer class for the Download model
class Download_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Download
        fields = '__all__'

# Serializer for the Service model
class Service_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

