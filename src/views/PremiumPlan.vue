<template>
  <v-container>
    <v-row class="pricing-section">
      <v-col cols="12" md="3" sm="3">
        <div class="text-left">
          <v-card-subtitle class="grey--text">
            <v-icon color="primary">mdi-star</v-icon> Premium Support
          </v-card-subtitle>
          <v-card-subtitle class="grey--text">
            <v-icon color="primary">mdi-file-document-edit</v-icon> Template Updates
          </v-card-subtitle>
          <v-card-subtitle class="grey--text">
            <v-icon color="primary">mdi-file-document-edit</v-icon> SUPPORT & UPDATES
          </v-card-subtitle>
          <v-card-subtitle class="grey--text">
            <v-icon color="primary">mdi-database-search</v-icon> Access All Templates
          </v-card-subtitle>
        </div>
      </v-col>

      <v-col v-for="(plan, index) in premiumPlans" :key="index" cols="12" md="3">
        <v-card class="text-center">
          <v-card-title class="headline">{{ plan.name }}</v-card-title>
          <v-card-subtitle class="grey--text">{{ plan.subtitle }}</v-card-subtitle>
          <v-card-text class="display-3">{{ plan.price }}</v-card-text>
          <v-list>
            <v-list-item v-for="(feature, fIndex) in plan.features" :key="fIndex">
              <v-list-item-action>
                <v-icon color="primary">mdi-check</v-icon>
              </v-list-item-action>
              <v-list-item-content>{{ feature }}</v-list-item-content>
            </v-list-item>
          </v-list>
          <v-card-actions>
            <v-btn color="black" to="/LoginIn">Subscribe</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-divider></v-divider>
    </v-row>
  </v-container>
</template>

<script>
export default {

  name: "PremiumPlan",

  data() {
    return {
      premiumPlans: [
        {
          name: 'Basic Plan',
          subtitle: 'Starter pack',
          price: '$19/month',
          features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],

        },
        {
          name: 'Pro Plan',
          subtitle: 'Most popular',
          price: '$39/month',
          features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
        },
        {
          name: 'Premium Plan',
          subtitle: 'All-inclusive',
          price: '$69/month',
          features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
        },
      ],
    };
  },
};
</script>
<style>
.grey--text {
  color: black;

}

.text-left {
  justify-content: center;
  margin-top: 180px;
}

.pricing-section {
  margin: 20px 0;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
}

.pricing-section .headline {
  font-size: 24px;
  color: #333;
}

.pricing-section .grey--text {
  font-size: 16px;
  color: #777;
}

.pricing-section .display-3 {
  font-size: 36px;
  font-weight: bold;
  color: #007BFF;
}

.pricing-section .v-icon {
  font-size: 24px;
  color: #4CAF50;
}

.pricing-section .v-btn {
  background-color: #308aeaf3;
  color: black;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
}

.pricing-section .v-btn:hover {
  background-color: #0056b3;
}
</style>