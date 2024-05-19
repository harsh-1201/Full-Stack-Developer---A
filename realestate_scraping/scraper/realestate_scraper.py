import requests
from bs4 import BeautifulSoup
import csv

def scrape_realestate_properties(location):
    base_url = f"https://www.realestate.com.au/rent/in-{location.lower()}"
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}
    response = requests.get(base_url, headers=headers)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        properties = soup.find_all('div', class_='listingInfo')
        property_data = []

        for property in properties:
            price = property.find('span', class_='property-price').text.strip()
            address = property.find('span', class_='address-line1').text.strip()
            bedrooms = property.find('span', class_='general-features__icon general-features__beds').next_sibling.strip()
            bathrooms = property.find('span', class_='general-features__icon general-features__baths').next_sibling.strip()
            agent = property.find('span', class_='agent__name').text.strip()

            property_info = {
                'Price': price,
                'Address': address,
                'Bedrooms': bedrooms,
                'Bathrooms': bathrooms,
                'Agent': agent
            }
            property_data.append(property_info)

        return property_data
    else:
        print("Failed to retrieve data")
        return None

def save_to_csv(data, filename):
    with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
        fieldnames = ['Price', 'Address', 'Bedrooms', 'Bathrooms', 'Agent']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for item in data:
            writer.writerow(item)

if __name__ == "__main__":
    location = input("Enter location (e.g., Epping): ")
    properties = scrape_realestate_properties(location)
    if properties:
        filename = f"{location}_properties.csv"
        save_to_csv(properties, filename)
        print(f"Data saved to {filename}")
    else:
        print("No data to save")

