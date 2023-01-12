INSERT INTO department 
    (name)
VALUES
    ('Administration'),
    ('Customer Service'),
    ('Marketing'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Assistant Manager', 65000, 1),
    ('Salesperson', 45000, 2),
    ('Advertising Consultant', 125000, 3),
    ('Attorney', 200000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Eva', 'Green', 2, 3),
    ('John', 'Doe', 1, 4),
    ('Lila', 'Perez', 4, 1),
    ('Michael', 'Douglas', 3, 5);