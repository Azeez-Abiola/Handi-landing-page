import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'j38ff3kg',
    dataset: 'production',
  },
  // Hostname for the hosted Studio: <studioHost>.sanity.studio
  // If deploy says this is taken, change it to another unique value.
  studioHost: 'handi-landing-studio',
})
