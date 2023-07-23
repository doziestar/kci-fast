# Using Python 3.11 base image
FROM python:3.11

# Setting the working directory in the container
WORKDIR /app/

# Copying the requirements file to the working directory
COPY ./app/requirements.txt /app/

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copying the entire app to the working directory
COPY ./app /app

# Updating the PYTHONPATH environment variable
ENV PYTHONPATH=/app
