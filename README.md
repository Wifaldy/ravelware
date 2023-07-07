# Ravelware API

### How to Run In Local

1. Clone the repository
    ```
    git clone https://github.com/Wifaldy/ravelware.git
    ```
2. Install dependencies
    ```
    npm install
    ```
3. Create database and tables, and insert data
    ```
    npx sequelize-cli db:create
    npx sequelize-cli db:migrate
    npx sequelize-cli db:migrate:undo:all # to undo all migrations
    npx sequelize-cli db:seed:all
    npx sequelize-cli db:seed:undo:all # to undo all seed
    ```
4. Run the server
    ```
    npm run dev
    ```

### API Route

1. Get One Monitored Endpoint
    ```
    GET /?name={name}
    ```
    
    example: `GET localhost:3000?name=PANEL LANTAI 1`

    Response:
    ```
    {
    "oneEnergyMonitoring": {
        "id": 12,
        "panel_name": "PANEL LANTAI 1",
        "energy": 1107.5,
        "power": 1870.12,
        "electric_current": 54918.53,
        "voltage": 28023.41,
        "createdAt": "2023-07-07T08:38:59.432Z",
        "updatedAt": "2023-07-07T08:38:59.432Z"
    },
    "todayUsageEnergy": 107.5,
    "costEnergy": 161250
    }
    ```

2. Get Monthly Report
    ```
    GET /monthly
    ```
    
    example: `GET localhost:3000/monthly`

    Response:
    ```
    {
    "energyMonitoring": [
        {
            "total_energy": 6321.3,
            "month": "July",
            "total_cost": 9481950
        },
        {
            "total_energy": 1500,
            "month": "June",
            "total_cost": 2250000
        }
      ]
    }
    ```


### Base URL

1. [Development](https://localhost:8000)
