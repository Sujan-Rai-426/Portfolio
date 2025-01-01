from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from cloudinary.models import CloudinaryField

# Create your models here.

# Tech section to add technology used inthe projects
class Technology(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


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
    image = CloudinaryField('image', folder='Portfolio/media_upload/', blank=False, null=True)
    tech_stack = models.ManyToManyField(Technology, related_name="projects")
    
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
    

# Models for dowmload section for downloading files like resume images and other pdf for user
class Download(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    file = CloudinaryField('file', folder='Portfolio/media_download/', blank=False, null=False)
    def __str__(self):
        return self.name


# Model for service section
class Service(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    description = models.TextField(max_length=150, null=False, blank=False)
    icon = models.CharField(max_length=50, null=False, blank=False)
    def __str__(self):
        return self.name


# models.py for contact form
class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} ({self.email})"