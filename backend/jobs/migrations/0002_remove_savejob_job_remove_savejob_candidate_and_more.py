# Generated by Django 5.0.6 on 2024-05-20 09:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='savejob',
            name='job',
        ),
        migrations.RemoveField(
            model_name='savejob',
            name='candidate',
        ),
        migrations.DeleteModel(
            name='JobLising',
        ),
        migrations.DeleteModel(
            name='SaveJob',
        ),
    ]
