import requests
from bs4 import BeautifulSoup

# Define the URLs for each city's weather page
city_urls = {
    'Calgary': 'https://weather.gc.ca/city/pages/ab-52_metric_e.html',
    'Halifax': 'https://weather.gc.ca/city/pages/ns-19_metric_e.html',
    'Montreal': 'https://weather.gc.ca/city/pages/qc-147_metric_e.html',
    'Toronto': 'https://weather.gc.ca/city/pages/on-143_metric_e.html',
    'Vancouver': 'https://weather.gc.ca/city/pages/bc-74_metric_e.html',
}

# Function to extract temperature from a city's weather page
def extract_temperature(city, url):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        temperature_element = soup.find('p', class_='mrgn-bttm-sm lead mrgn-tp-sm')
        if temperature_element:
            temperature = temperature_element.get_text()
            return temperature.strip()
    return "N/A"

# Create a dictionary to store the city and temperature data
weather_data = {}

# Extract temperature for each city
for city, url in city_urls.items():
    temperature = extract_temperature(city, url)
    weather_data[city] = temperature

# Store the extracted data in a text file
with open('Weather.txt', 'w') as file:
    for city, temperature in weather_data.items():
        file.write(f'City: {city} Temperature: {temperature}\n')

print("Data extraction and storage completed. Weather.txt has been created.")
