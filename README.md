# EMQX Charts

Deploy your **EMQX v5** clusters with the new core and replicant architecture using this Helm Chart. EMQX (Erlang MQTT Broker) is a highly scalable, distributed, and extensible MQTT messaging platform for IoT, M2M, and mobile applications, now enhanced with a cutting-edge architecture to better handle large-scale deployments.

## Architecture Overview

### Core and Replicant Architecture

The EMQX v5 introduces a new core and replicant architecture, which optimizes the management and scalability of MQTT brokers. Here's a brief overview:

- **Core Nodes**: These nodes handle the essential tasks of the MQTT broker, including connection management, authentication, authorization, and message routing.
- **Replicant Nodes**: These nodes replicate the state of core nodes, providing redundancy and enabling horizontal scalability. Replicant nodes ensure that the system remains available and can handle increased loads by distributing the workload across multiple nodes.

This architecture separates concerns, enhancing both performance and reliability. Core nodes can focus on critical tasks, while replicant nodes ensure the system scales efficiently.

## Help

After cloning the repository, run `make help` to get detailed installation guides and understand various available commands and options. This will provide you with instructions on setting up your environment, preparing your cluster, and deploying EMQX using Helm.

### Example Commands

- **View Help**: `make help`
  - Displays all available commands and their usage.
- **Setup Environment**: `make dry-run`
  - Perform a dry run of the Helm chart deployment
- **Validate Configuration**: `make debug`
  - Ensures your configuration files are correctly set up before deployment.

## Deploy

To deploy this chart on your Kubernetes cluster, follow these steps:

1. **Build Helm Dependencies**: Ensure all dependencies are correctly set up for the Helm chart by running:
   ```sh
   make helm-dep-build
   ```
   This command will download and configure all necessary dependencies required by the Helm chart.

2. **Deploy the Chart**: Deploy the EMQX Helm chart to your cluster:
   ```sh
   make deploy
   ```
   This command will execute the Helm deployment process, setting up your EMQX cluster with the specified configuration.

### Configuration

You can customize your deployment by modifying the `values.yaml` file in the Helm chart directory. This file allows you to set various parameters such as the number of core and replicant nodes, resource limits, persistence settings, and more.

### Example `values.yaml`

```yaml
emqx:
  replicaCount: 3 # use for cores replication
  replicantsCount: 3 # use for replicants replication
  image:
    repository: emqx/emqx
    tag: v5.0
    pullPolicy: IfNotPresent
  resources:
    requests:
      memory: "512Mi"
      cpu: "500m"
    limits:
      memory: "1Gi"
      cpu: "1"
  nodeSelector: {}
  tolerations: []
  affinity: {}
```

Adjust these values based on your specific requirements and cluster capacity.

## References

For more detailed information, please refer to the following resources:

- [EMQX GitHub Repository](https://github.com/emqx/emqx/blob/master/deploy/charts/emqx/README.md)
  - The official repository contains comprehensive documentation on EMQX, including advanced configuration options, troubleshooting guides, and community support.

- [EMQX Operator Documentation](https://github.com/emqx/emqx-operator/blob/main/docs/en_US/getting-started/getting-started.md)
  - Learn about the EMQX Operator, which simplifies the management of EMQX clusters on Kubernetes. The operator automates tasks such as scaling, upgrades, and configuration management.

By following this guide and leveraging the provided references, you can efficiently deploy and manage your EMQX v5 clusters using the Helm Chart, ensuring a robust and scalable MQTT messaging solution for your IoT and M2M applications.
