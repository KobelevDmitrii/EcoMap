run-all:
	docker-compose up --build

run-backend:
	docker-compose up --build app pg

.PHONY: run-all run-backend