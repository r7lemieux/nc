<script lang="ts">
  
  import {sources} from '$services/domain/sources'
</script>

<h1>Sources</h1>
<section class="sources">
  {#each sources as source}
    <div class="source">
      <span class="id">{source.id}</span>
      <span class="ref">
      <a href="{source.url}" class="name text">{source.name}</a>
      {#if source.author && source.author !== source.org}
        ,&nbsp
        <span class="text author">{source.author}</span>
      {/if}
      {#if source.org}
        ,&nbsp
        <span class="text org">{source.org}</span>
      {/if}
      {#if source.date}
        ,&nbsp
        <span class="date">{source.date.toLocaleDateString()}</span>
      {/if}
      </span>
    </div>
  {/each}
</section>
<style>
  .source {
    display: grid;
    grid-template-columns: 2rem 1fr;
    
    & .id {
      justify-content: end;
    }
    
    & .ref {
      padding: 0 0 0.5rem 0;
      
      & .author {
        color: #560;
      }
      & .org {
        color: #077;
      }
      & .date {
        color: #400
      }
      & .name {
        font-weight: bold;
      }
    }
  }
</style>