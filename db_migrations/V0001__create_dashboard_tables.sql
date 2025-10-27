CREATE TABLE IF NOT EXISTS dashboard_stats (
    id SERIAL PRIMARY KEY,
    stat_date DATE NOT NULL DEFAULT CURRENT_DATE,
    active_users INTEGER NOT NULL DEFAULT 0,
    revenue DECIMAL(12, 2) NOT NULL DEFAULT 0,
    conversion_rate DECIMAL(5, 2) NOT NULL DEFAULT 0,
    new_requests INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS monthly_activity (
    id SERIAL PRIMARY KEY,
    month_name VARCHAR(20) NOT NULL,
    month_order INTEGER NOT NULL,
    activity_value INTEGER NOT NULL DEFAULT 0,
    year INTEGER NOT NULL DEFAULT EXTRACT(YEAR FROM CURRENT_DATE),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS system_activity (
    id SERIAL PRIMARY KEY,
    system_name VARCHAR(100) NOT NULL,
    load_percentage INTEGER NOT NULL DEFAULT 0,
    last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO dashboard_stats (active_users, revenue, conversion_rate, new_requests) VALUES
    (24589, 2400000.00, 3.24, 1249);

INSERT INTO monthly_activity (month_name, month_order, activity_value, year) VALUES
    ('Янв', 1, 45, 2025),
    ('Фев', 2, 52, 2025),
    ('Мар', 3, 48, 2025),
    ('Апр', 4, 65, 2025),
    ('Май', 5, 71, 2025),
    ('Июн', 6, 68, 2025),
    ('Июл', 7, 85, 2025);

INSERT INTO system_activity (system_name, load_percentage) VALUES
    ('Веб-приложение', 68),
    ('Мобильное приложение', 45),
    ('API запросы', 82),
    ('База данных', 35);