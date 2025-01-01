from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from cloudinary.models import CloudinaryField

# Create your models here.
# Model class for Project Section
class Project(models.Model):
    # For input type with choice 
    WEBSITE_TYPE_CHOICES = [
        ('Static Website', 'Static Website'),
        ('Dynamic Website', 'Dynamic Website'),
        ('Web Application', 'Web Application'),
        ('Reusable Code', 'Reusable Code')
    ]
    name = models.CharField(max_length=50, blank=False)
    website_type = models.CharField(max_length=20, choices= WEBSITE_TYPE_CHOICES, default='Static Website')
    detail = models.TextField(max_length = 150, blank=False)
    link = models.URLField(blank=True, null=True)
    image = CloudinaryField('image', folder='media_Profile_website/upload_project_img/', blank=False, null=False)
    
    def __str__(self):
        return self.name


# Model class for skill section of front end
class Frontend_Skill(models.Model):
    name = models.CharField(max_length=20, blank=False)
    percentage = models.IntegerField (validators=[MinValueValidator(0), MaxValueValidator(100)] ,null=True ,blank=False)
    def __str__(self):
        return self.name


# Model class for skill section of back end
class Backend_Skill(models.Model):
    name = models.CharField(max_length=20, blank=False)
    percentage = models.IntegerField (validators=[MinValueValidator(0), MaxValueValidator(100)] ,null=True ,blank=False)
    def __str__(self):
        return self.name


# Model to show my current address of developer class
class CurrentAddress(models.Model):
    location = models.CharField(max_length=50, null=False, blank=False)
    def __str__(self):
        return self.location