import {defineConfig} from 'sanity'
import {DeskToolOptions, deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

// Custom components
import Logo from './components/Logo'
import StudioNavbar from './components/StudionNavbar'

import customTheme from './theme'
import { getDefaultDocumentNode } from './structure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'SeducerCast_Studio',
  title: 'SeducerCast Studio',
  projectId,
  dataset,
  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode
  }), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      // Custom components
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: customTheme,
});
