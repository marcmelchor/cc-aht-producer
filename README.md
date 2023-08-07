# AHT CODE CHALLENGE - `PRODUCER`

An express application coded on Typescript to feed the EtLT Process.


## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
  - [API Consumer](#api-consumer)
  - [API Producer](#api-producer)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)


## Project Overview

The `cc-aht-producer` is the first step in order to feed the [EtLT](https://www.integrate.io/blog/what-is-etlt/) process flow connecting the `Source` section.
Following the [DAG](https://en.wikipedia.org/wiki/Directed_acyclic_graph) graph theory.


## Features

- ### API Consumer
  Using the Random Data [API](https://random-data-api.com/), you can get random blood types.

- ### API Producer
  Getting the data from the API above, is added an extra attribute `username` in order to be masked in future steps.


## Installation

Follow this steps to get `cc-aht-producer` up and running:

1. Be sure to have Node.js and npm installed in your machine.
2. Clone this repository `git clone https://github.com/marcmelchor/cc-aht-producer.git`
3. Navigate to the project folder: `cd cc-aht-producer`
4. Install dependencies: `npm install`
5. Start application: `npm start`


## Usage

Once the application is up and running, you can hit the API on `http://localhost:4000`.

- Get the `DWH (Data Warehouse)` app and running, you can find it on `https://github.com/marcmelchor/cc-aht-dwh-psql`.
- Get the `Business Transit` app and running, you can find it on `https://github.com/marcmelchor/cc-aht-business-transit`.
- Get the `Transofrm and Sink` app and running, you can find it on `https://github.com/marcmelchor/cc-aht-transform-and-loading`.
- Get the `Source` app and running, you can find it on `https://github.com/marcmelchor/cc-aht-extract/tree/Main`.
- Open your preferred `API platform` (e.g. Postman).
- Create a new `POST` request with this uri `http://localhost:4000/produce-data`.
- In the `Authorization` section and a `Bearer Token` you can find it in `./src/environments/environment.ts` the attribute `authSourceToken`.
- Send the request.


## Configuration

By default, all the configuration variables are set, but you can modify them on the `./src/environments/environment.ts`.

```
export const environment = {
  authSourceToken: 'YM%Ln#c7Bg94MyAHrs$n4DQnjk$$vErH',
  bloodTypeAPI: 'https://random-data-api.com/api/v2/blood_types',
  ...
};

```


## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-new-feature`
3. Make changes and commit: `git commit -am 'Add new feature'`
4. Push the branch: `git push origin feature-new-feature`
5. Open a pull request.


## License

This project is licensed under the <u>[MIT License](https://opensource.org/license/mit/)</u>.


## Contact

For questions or feedback, you can reach me at <u>marc.melchor@outlook.com</u> or follow me on <b>LinkedIn</b> <u>@marc-melchor</u>. 
