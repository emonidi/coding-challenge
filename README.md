# Coding-Challenge

## The Beauty List

## Task
The task is to create a simple Webapp consisting of two pages. The App is gonna be pure frontend and should be written in React. The App should be optimized for mobile phones. You will be using the MakeUp Api to feed your app with data: https://makeup-api.herokuapp.com/
Please read the api instructions carefully, and only fetch what you need.

## The pages

### Page 1 - Home Page
The homepage contains two elements:
- A basic navigation with a link to the "List Page"
- A teaser module that consists of an image, a headline, some text and a button that also links to the "List Page"

### Page 2 - List Page
The list page contains two main components: a filter bar and a list of products.

##### The Filter Bar
The filterbar will be used to filter the products in the list. The filter bar consists of two inputs. A text input, and a select input.
The Text input should filter the list by name and the select input should filter the list by brand.
Both filter functionalitys should happen in realtime as the user changes something in the inputs. So NO submit or apply buttons.

##### The List
Is a list of products. The list should always ONLY contain the products of one specific brand. So make sure there is always one brand selected in the filter by default. If the filter, does not return any products, a text stating "No products to be displayed" should show. Each Item in the list should display the name of the product, the image and its price (including currency). Clicking on a product should redirect the user to the url (product link) provided by the API.



### Version Control
Please fork this Repository to start working. Commit your changes in a style as if you would be working a small team. 