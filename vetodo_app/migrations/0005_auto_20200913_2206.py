# Generated by Django 3.1.1 on 2020-09-13 22:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('vetodo_app', '0004_auto_20200913_2113'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='TodoReminderNotification',
            new_name='TodoReminder',
        ),
    ]
