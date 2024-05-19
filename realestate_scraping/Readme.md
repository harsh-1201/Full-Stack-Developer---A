# Real Estate Web Scraping

This Python script allows you to scrape property data from [realestate.com.au](https://www.realestate.com.au/). It fetches details of properties listed for rent in a specific location and saves the data in a structured format such as CSV or JSON.

## Getting Started

To use this script, follow these steps:

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd realestate_scraping
   ```

2. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the script:
   ```bash
   python scraper/realestate_scraper.py
   ```

4. Follow the prompts to input the location (e.g., "Epping") for which you want to scrape property data.

## Script Output

The scraped data will be saved in a CSV file named `<location>_properties.csv` in the root directory of the project.

## Dependencies

- [requests](https://pypi.org/project/requests/): Used to send HTTP requests to the website.
- [BeautifulSoup](https://pypi.org/project/beautifulsoup4/): Used to parse HTML content and extract data.

## Project Structure

```
realestate_scraping/
│
├── README.md
├── requirements.txt
├── scraper/
│   ├── __init__.py
│   ├── realestate_scraper.py
│   └── utils.py
│
└── examples/
    ├── example_usage.ipynb
    └── example_usage.py
```

- `scraper/`: Contains the web scraping script.
- `examples/`: Contains example usage files (Jupyter notebook and Python script).

## Example Usage

Check out the [example_usage.ipynb](examples/example_usage.ipynb) Jupyter notebook or [example_usage.py](examples/example_usage.py) Python script to see how to use the scraper in your own projects.


