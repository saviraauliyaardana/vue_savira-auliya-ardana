# 25 Understanding GraphQL Subscribsion
## Resume

Dalam materi ini mempelajari:
1. GraphQL Overview
2. Hasura & Heroku
3. Apollo Setup
4. Query
5. Mutation
6. Subscription

### GraphQL Overview
GraphQL is a Query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL minimizes the amount of data that needs to be transferred over the network. With graphQL we can use one double endpoint (/ graphQL) for any requests needed.

GraphQL Core Features
There are 3 main Features in GraphQL client:
1. Query, get databased on specific query that we define
    - Query - Basics
        With GraphQL we can get data exactly what we need. We define what fields that we want to get and graphQL will give us data based on what we define.
    - Query - multiple related data sources/collections
        We can also use query to get data from multiple related collections. In thr example, if we want to get director data we need to use director.id to get data from other endpoint, but with graphQL we can also define needed fields directly as long as it's available on GraphQL server.
    - Query - multiple unrelated data sources/collections
        we can also use query to get data from multiple unrelated collections for minimizing network request. 
    - Query - fragments
        A GraphQL fragment is a piece of logic that can be shared between multiple queries and mutations. We can use fragment to simplify query or mutation

2. Mutation, insert,update,delete data

   Mutation is basically functionality to update,insert and delete data. We need to define what operation that we want to do (based on available operation on your graphql server) and then define what data GraphQL need to return

3. Subscription, get updated date realtime/based on events

    Subscription are a GraphQL feature that allows a server to send data to its clients when a specific event happens. Subscription are usually implemented with WebSockets. In the server maintains a steady connection to its subscribed client.

### Hasura & Heroku
Hasura is a service provide graphql and rest api. Full managed on hasura cloud or self-hasted.

Heroku is a cloud platform as a service supporting several programming languages. Heroku also provide free postgres database.

Setting hasura and heroku
- After finish register hasura and heroku, open hasura and create new project
- when finish launch console and setting database server 
- click tab data and create heroku database
- when it's done create database you can configure your database
- Open tab API, use endpoint and header x-hasura-admin-secret as header

Make as hasura public API
- To change hasura public API, open [hasura project](https://cloud.hasura.io/projects) and open configuration
- Open Env vars, click HASURA_GRAPHQL_ADMIN_SECRET then click delete icon, open console then your graphql public now

Query and Mutation
Open tab API, write your query or just click in explorer then click execute. Create mutation query to insert new dta or update data

### Apollo Setup
Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating your UI.

Apollo Client Vue Setup
- Set up on main.js file
- Create apolloClient
    ```bash
    Vue.config.productionTip = false;

    const httpLink = new HttpLink({
        uri: ''
    });

    const apolloClient = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
        connectToDevTools: true
    });

    Vue.use(VueApollo);

    const apolloProvider = new VueApollo({
        defaultClient: apolloClient
    });
    ```
    - uri specifies the URL of our GraphQL server
    - cache is an instance of InMemoryCache, which Apollo Client uses to cache query result after fetching them

- Setting apollo provider, in main.js import ApolloProvider
    ```bash 
    new Vue({
        el: '#app',
        apolloProvider,
        render: h => h(App)
    });
    ```
    ApolloProvider wraps your React app and places Apollo Client on the context, which enables you to access it from anywhere in your component tree

### Query
Query With Apollo Client

You can use the ApolloQuery (or apollo-query) component to have watched Apollo queries directly in your template. After reading this page, see the API Reference for all the possible options.
```bash
<template>
  <ApolloQuery
    :query="gql => gql`
      query MyHelloQuery ($name: String!) {
        hello (name: $name)
      }
    `"
    :variables="{ name }"
  >
    <!-- TODO -->
  </ApolloQuery>
</template>
```
We are passing a function to the query prop that gets the gql tag as argument, so we can write the GraphQL document directly.
The above example also features variables passed to the query using the prop with the same name.
Inside the default slot of ApolloQuery, you can access various slot data about the watched query, like the result object:
```bash
<template v-slot="{ result: { loading, error, data } }">
  <!-- Loading -->
  <div v-if="loading" class="loading apollo">Loading...</div>

  <!-- Error -->
  <div v-else-if="error" class="error apollo">An error occurred</div>

  <!-- Result -->
  <div v-else-if="data" class="result apollo">{{ data.hello }}</div>

  <!-- No result -->
  <div v-else class="no-result apollo">No result :(</div>
</template>
```
Here is the complete example component:
```bash
<script>
export default {
  data () {
    return {
      name: 'Anne'
    }
  }
}
</script>

<template>
  <div>
    <input v-model="name" placeholder="Enter your name">

    <ApolloQuery
      :query="gql => gql`
        query MyHelloQuery ($name: String!) {
          hello (name: $name)
        }
      `"
      :variables="{ name }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occurred</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">{{ data.hello }}</div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>
```

### Mutation
- Mutation with Apollo Client

You can use the ApolloMutation (or apollo-mutation) component to call Apollo mutations directly in your template.
Here is an example:
```bash
<ApolloMutation
  :mutation="gql => gql`
    mutation DoStuff ($name: String!) {
      someWork (name: $name) {
        success
        timeSpent
      }
    }
  `"
  :variables="{
    name
  }"
  @done="onDone"
>
  <template v-slot="{ mutate, loading, error }">
    <button :disabled="loading" @click="mutate()">Click me</button>
    <p v-if="error">An error occurred: {{ error }}</p>
  </template>
</ApolloMutation>
```
See ApolloQuery to learn how to write GraphQL queries in the template. See API Reference for all the available options

- Mutation with Apollo Client - Updating the cache

you need to tell Apollo Client how to update the cache with the mutation result. For example, if the mutation adds a new item, you have to update the relevent query result to effectively push this new items to the query.

#Adding an item
```bash
<template>
  <ApolloMutation
    :mutation="gql => gql`
      mutation ($input: SendMessageToThreadInput!) {
        sendMessageToThread (input: $input) {
          message {
            ...message
          }
        }
      }
      ${$options.fragments.message}
    `"
    :variables="{
      threadId,
      text
    }"
    :update="updateCache"
  >
    <!-- Form here -->
  </ApolloMutation>
</template>

<script>
import gql from 'gql-tag'

const fragments = {
  message: gql`
    fragment message on Message {
      id
      text
      user {
        id
        name
      }
    }
  `
}

export default {
  fragments,

  props: {
    threadId: {
      type: String,
      required: true
    }
  },

  methods: {
    updateCache (store, { data: { sendMessageToThread } }) {
      const query = {
        query: gql`
        query ($threadId: ID!) {
          thread (id: $threadId) {
            id
            messages {
              ...message
            }
          }
        }
        ${fragments.message}
        `,
        variables: {
          threadId: this.threadId,
        },
      }
      // Read the query from cache
      const data = store.readQuery(query)
      // Mutate cache result
      data.thread.messages.push(sendMessageToThread.message)
      // Write back to the cache
      store.writeQuery({
        ...query,
        data,
      })
    },
  }
}
</script>
```

- Mutation with Apollo Client - Removing an item

```bash
<template>
  <ApolloMutation
    :mutation="gql => gql`
      mutation ($input: DeleteMessageFromThreadInput!) {
        deleteMessageFromThread (input: $input) {
          success
        }
      }
    `"
    :variables="{
      threadId,
      messageId
    }"
    :update="updateCache"
  >
    <!-- Form here -->
  </ApolloMutation>
</template>

<script>
import gql from 'gql-tag'

const fragments = {
  message: gql`
    fragment message on Message {
      id
      text
      user {
        id
        name
      }
    }
  `
}

export default {
  fragments,

  props: {
    threadId: {
      type: String,
      required: true
    },
    messageId: {
      type: String,
      required: true
    }
  },

  methods: {
    updateCache (store, { data: { deleteMessageFromThread } }) {
      const query = {
        query: gql`
        query ($threadId: ID!) {
          thread (id: $threadId) {
            id
            messages {
              ...message
            }
          }
        }
        ${fragments.message}
        `,
        variables: {
          threadId: this.threadId,
        },
      }
      // Read the query from cache
      const data = store.readQuery(query)
      // Look for the deleted item
      const index = data.thread.messages.findIndex(m => m.id === this.messageId)
      if (index !== -1) {
        // Mutate cache result
        data.thread.messages.splice(index, 1)
        // Write back to the cache
        store.writeQuery({
          ...query,
          data,
        })
      }
    },
  }
}
</script>
```

### Subscription
- Setting Subscription

    - To enable the websocket-based subscription, a bit of additional setup is required:

    ```npm install --save apollo-link-ws apollo-utilities```

    - import all needed modules and separate between http and websocket link
    ```bash
    import Vue from 'vue'
    import { ApolloClient } from 'apollo-client'
    import { HttpLink } from 'apollo-link-http'
    import { InMemoryCache } from 'apollo-cache-inmemory'
    // New Imports
    import { split } from 'apollo-link'
    import { WebSocketLink } from 'apollo-link-ws'
    import { getMainDefinition } from 'apollo-utilities'

    import VueApollo from 'vue-apollo'

    const httpLink = new HttpLink({
        // You should use an absolute URL here
        uri: 'http://localhost:3020/graphql',
    })

    // Create the subscription websocket link
    const wsLink = new WebSocketLink({
        uri: 'ws://localhost:3000/subscriptions',
        options: {
        reconnect: true,
        },
    })

    // using the ability to split links, you can send data to each link
    // depending on what kind of operation is being sent
    const link = split(
    // split based on operation type
    ({ query }) => {
    const definition = getMainDefinition(query)
        return definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        },
        wsLink,
        httpLink
    )

    // Create the apollo client
    const apolloClient = new ApolloClient({
        link,
        cache: new InMemoryCache(),
        connectToDevTools: true,
    })

    // Install the vue plugin like before
    Vue.use(VueApollo)
    ```

- Setting Subscription - ApolloSubscribeToMore

You can subscribe to more data with the ApolloSubscribeToMore (or apollo-subscribe-to-more) component. You can put as many of those as you want inside a <ApolloQuery> component.

Here is an example:
```bash
<template>
  <ApolloQuery :query="...">
    <ApolloSubscribeToMore
      :document="gql => gql`
        subscription messageChanged ($channelId: ID!) {
          messageAdded (channelId: $channelId) {
            type
            message {
              id
              text
            }
          }
        }
      `"
      :variables="{ channelId }"
      :updateQuery="onMessageAdded"
    />

    <!-- ... -->
  </ApolloQuery>
</template>

<script>
export default {
  data () {
    return {
      channel: 'general',
    }
  },

  methods: {
    onMessageAdded (previousResult, { subscriptionData }) {
      // The previous result is immutable
      const newResult = {
        messages: [...previousResult.messages],
      }
      // Add the question to the list
      newResult.messages.push(subscriptionData.data.messageAdded)
      return newResult
    },
  },
}
</script>
```
See ApolloQuery to learn how to write GraphQL queries in the template. See API Reference for all the available options.

## Task
Pada task ini melakukan subscription pada project yang dipakai sebelumnya

Output:

    
    ![](https://drive.google.com/uc?export=view&id=)
    