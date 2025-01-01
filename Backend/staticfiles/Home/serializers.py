
# Manually created file to serialize
from rest_framework import serializers
from .models import Project, Frontend_Skill, Backend_Skill, CurrentAddress

# Peoject Serializer for project model
class Project_Serializer(serializers.ModelSerializer):
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