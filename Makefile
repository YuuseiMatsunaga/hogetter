build:
	@docker-compose run --rm frontend npm i
	@docker-compose run --rm backend npm i
	@make up
	@make migrate

ps:
	@docker-compose ps

up:
	@docker-compose up -d
	@make ps

stop:
	@docker-compose stop
	@make ps

g-migration-%:
	@docker-compose exec backend npm run migration:create $*

migrate:
	@docker-compose exec backend npm run typeorm migration:run

migration-revert:
	@docker-compose exec backend npm run migration:revert