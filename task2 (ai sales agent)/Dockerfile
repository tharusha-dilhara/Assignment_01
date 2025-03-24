# Use an official Python runtime as a parent image
FROM python:3.9-slim


# Set a working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt /app/

# Install dependencies
RUN pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . /app/

# Expose the port Flask will run on (7000 in your case)
EXPOSE 7000

# Command to run the application
CMD ["python", "app.py"]
