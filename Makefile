# Makefile for managing Helm chart lifecycle

# Variables
HELM_RELEASE_NAME=emqx
HELM_CHART_PATH=./emqx
NAMESPACE=default
VALUES_FILE=.values.yaml

.PHONY: help deploy test debug clean lint dry-run helm-dep-build

help: ## Display this help message
	@echo "Usage:"
	@echo "  make <target>"
	@echo ""
	@echo "Targets:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-15s %s\n", $$1, $$2}'

deploy: ## Deploy the Helm chart
	@helm upgrade --install $(HELM_RELEASE_NAME) $(HELM_CHART_PATH) -f $(VALUES_FILE) --namespace $(NAMESPACE)
	@echo "Helm chart deployed successfully!"

test: ## Run Helm tests
	@helm test $(HELM_RELEASE_NAME) --namespace $(NAMESPACE)
	@echo "Helm tests executed!"

debug: ## Debug the Helm chart
	@helm template $(HELM_RELEASE_NAME) $(HELM_CHART_PATH) -f $(VALUES_FILE) --namespace $(NAMESPACE)
	@echo "Helm chart templated for debugging!"

clean: ## Delete the Helm release
	@helm uninstall $(HELM_RELEASE_NAME) --namespace $(NAMESPACE)
	@echo "Helm release deleted!"

lint: ## Lint the Helm chart
	@helm lint $(HELM_CHART_PATH)
	@echo "Helm chart linted!"

dry-run: ## Perform a dry run of the Helm chart deployment
	@helm upgrade --install $(HELM_RELEASE_NAME) $(HELM_CHART_PATH) -f $(VALUES_FILE) --namespace $(NAMESPACE) --dry-run --debug
	@echo "Helm chart dry run completed!"

helm-dep-build: ## Build the Helm chart dependencies
	@helm dependency build $(HELM_CHART_PATH)
	@echo "Helm chart dependencies built!"
