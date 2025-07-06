<script lang="ts">
  // import 'ag-grid-community/styles/ag-grid.css';
  import 'ag-grid-community/styles/ag-theme-alpine.css'
  import {type War, warData} from '$services/domain/wars/war.data'
  import {
    AllCommunityModule,
    createGrid,
    type GridOptions, type ICellRendererParams,
    ModuleRegistry
  } from 'ag-grid-community'
  import {onMount} from 'svelte'
  import {toFixLengthString, toStringInMillions} from '$utils/numberFormater'
  import {sources} from '$services/domain/sources.data'
  import {fieldsWithLink} from '$services/domain/wars/war.js'
  
  ModuleRegistry.registerModules([AllCommunityModule])
  
  const columnDefs = [
    {
      field: 'label',
      maxWidth: 140,
    },
    {
      field: 'cost',
      cellRenderer: function (params: ICellRendererParams) {
        return `<div style="line-height:1.5rem">${params.value.toLocaleString()}</div style="line-height:0.5px">
         <div style="line-height:1.5rem">${toStringInMillions(params.value)}</div>`
      },
      wrapText: true,
      autoHeight: true,
      flex: 1,
      minWidth: 165,
      maxWidth: 165
    },
    {
      field: 'usDeaths',
      headerName: 'US Deaths',
      maxWidth: 90,
      wrapHeaderText: true,
      headerStyle: {'text-align': 'center', 'align-content': 'center'}
    },
    {
      field: 'directKills',
      headerName: 'Kills',
      maxWidth: 100
    },
    {
      field: 'totalDeaths',
      headerName: 'Total Deaths',
      maxWidth: 100,
      wrapHeaderText: true
    },
    {
      field: 'displaced',
      headerName: 'Displaced',
      width: 100,
    },
    {
      field: 'refugees',
      headerName: 'Refugees',
      width: 100,
    },
    {
      field: 'childrenDeaths',
      headerName: 'Kids Deaths',
      width: 100,
      wrapHeaderText: true,
    },
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
  const columnsWithLink = columnDefs.filter(columnDef => fieldsWithLink.includes(columnDef.field))
  columnsWithLink.forEach(columnDef => {
    columnDef.cellRenderer = (params) => {
      const srcIds = params.data[columnDef.field + 'Link']
      console.log(`==>Wars.svelte:90 srcIds`, srcIds)
      if (srcIds && srcIds.length) {
        const srcs = srcIds.map(srcId => sources.find(src => src.id === srcId)?.url)
        console.log(`==>Wars.svelte:92 srcs`, srcs)
        const opentabStr = () => {
          if (srcs.length <= 1) return ''
          return srcs.slice(1).reduce((ret, src) => ret + ` window.open('${src}');`, '')
        }
        return `<a href="${srcs[0]}" target="_blank" onclick="((ev)=>{
          console.log('==>Wars.svelte:102 ev', ev)
          ${opentabStr()}
          })()">
            ${params.value}
          </a>`
      } else {
        return params.value
      }
    }
  })
  
  // console.log(`==>Wars.svelte:81 cols`, cols)
  const gridOptions: GridOptions<War> = {
    rowData: warData,
    columnDefs
  }

  onMount(() => {
    const myGridElement = document.querySelector('#myGrid') as HTMLElement
    const grid = createGrid(myGridElement, gridOptions)
  })
</script>

<h1>Main Wars since 2000</h1>
<section class="wars">
  <div class="ag-theme-alpine" style="width: calc(100% - 2rem);">
    <div id="myGrid" style="height: 40rem"></div>
  </div>
</section>
<style>
  :global(.ag-theme-alpine) {
    /*height: 100%;*/
    width: calc(100% - 2rem);
  }
</style>
