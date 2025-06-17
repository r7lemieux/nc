<script lang="ts">
  // import 'ag-grid-community/styles/ag-grid.css';
  import 'ag-grid-community/styles/ag-theme-alpine.css'
  import {type War, wars} from '$services/domain/wars'
  import {
    AllCommunityModule,
    createGrid,
    type GridOptions, type ICellRendererParams,
    ModuleRegistry
  } from 'ag-grid-community'
  import {onMount} from 'svelte'
  import {toFixLengthString, toStringInMillions} from '$utils/numberFormater'
  import {sources} from '$services/domain/sources'
  
  ModuleRegistry.registerModules([AllCommunityModule])
  
  const gridOptions: GridOptions<War> = {
    rowData: wars,
    columnDefs: [
    {
      field: "label",
      maxWidth: 140
    },
    { field: "cost",
      cellRenderer: function(params: ICellRendererParams) {
        return `<p style="line-height:1px">${params.value.toLocaleString()}</p>
         <p>${toStringInMillions(params.value)}</p>`
      },
      wrapText: true,
      autoHeight: true,
      flex: 1,
      maxWidth: 165
    },
    {
      field: "usDeaths",
      headerName: "US Deaths",
      maxWidth: 80},
    // { field: "sourceIds",
    //   headerName: "sources",
    //   valueFormatter: params => `<h3>${params.value || ''}</h3>`,
    //   cellRenderer: function(params: ICellRendererParams) {
    //     if (!params.value) return ''
    //     return (params.value as number[])
    //       .map(srcId =>`<p><a href="${sources[srcId].url}" target="_blank" rel="noopener">${sources[srcId].name}</a></p>`)
    //       .join(' ')
    //   }
    // }
  ]
  }
  onMount(() => {
    const myGridElement = document.querySelector('#myGrid') as HTMLElement
    const grid = createGrid(myGridElement, gridOptions);
    grid.resetRowHeights()
  })
</script>

<h1>Main Wars since 2000</h1>
<section class="wars">
  <div class="ag-theme-alpine" style="height: 100%; width: calc(100% - 2rem);">
    <div id="myGrid" style="height: 46rem"></div>
  </div>
</section>
<style>
  :global(.ag-theme-alpine) {
    height: 100%;
    width: calc(100% - 2rem);
  }
</style>
