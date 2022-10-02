<template>
  <n-popover width="trigger" placement="top" :overlap="true" :show-arrow="false">
    <n-space size="small" :wrap-item="false">
      <n-tag strong size="small" :bordered="false">
        Crit: {{ combatantInfo.critHitPct }}
      </n-tag>
      <n-tag strong size="small" :bordered="false">
        Direct: {{ combatantInfo.directHitPct }}
      </n-tag>
      <n-tag strong size="small" :bordered="false">
        DirectCrit: {{ combatantInfo.directCritHitPct }}
      </n-tag>
      <!-- <n-tag strong size="small" :bordered="false">
        Death: {{ combatantInfo.deaths }}
      </n-tag> -->
    </n-space>
    <template #trigger>
      <n-grid :x-gap="16" :cols="5" style="margin-top: 4px">
        <n-grid-item :span="2">
          <n-space vertical>
            <n-card
              :bordered="false" 
              style="text-align: center; height: 36px"
              content-style="padding: 4px 12px 4px 0"
            >
              <n-h3 prefix="bar">{{ combatantInfo.dps }}</n-h3>
            </n-card>
            <!-- <n-card
              :bordered="false" 
              style="text-align: center; height: 20px"
              content-style="padding: 0 0 0 0"
            >
              <n-p style="margin-bottom: 0; font-size: xx-small;">
                {{ combatantInfo.job.toUpperCase() }}/{{ combatantInfo.damagePct }}
              </n-p> -->
            <!-- </n-card> -->
          </n-space>
        </n-grid-item>
        <n-grid-item :span="3">
          <n-space vertical style="gap: 4px 2px">
            <n-h6 style="margin: -4px 0 0px 0"> {{ combatantInfo.name }} </n-h6>
            <n-statistic style="margin-top: -12px">
              <!-- <template #label>
                <n-tag strong size="small" :bordered="false" style="margin: 10px 0px 0px -4px;">Max</n-tag>
              </template> -->
              <n-space>
                <n-p style="margin-bottom: 0; font-size: xx-small;">{{ combatantInfo.maxHit }}</n-p>
                <n-p style="margin-bottom: 0; font-size: xx-small;">{{ combatantInfo.maxHitDamage }}</n-p>
              </n-space>
            </n-statistic>
          </n-space>
        </n-grid-item>
        <n-grid-item :span="5">
          <n-progress 
            color="salmon" 
            type="line" 
            :height="6"
            :processing="active"
            :border-radius="4"
            :fill-border-radius="0"
            :show-indicator="false"
            :percentage="parseInt(combatantInfo.damagePct.replace('%', ''))"
            style="margin: 0px 0 0 0"/>
        </n-grid-item>
      </n-grid>
    </template>
  </n-popover>
</template>

<script lang="ts" >
   import { NH3, NH6, NP, NCard, NTag, NSpace, NStatistic, NGrid, NGridItem, NProgress, NPopover } from 'naive-ui'
   export default {
    components: { 
      NH3,
      NH6,
      NP,
      NTag,
      NPopover,
      NCard, 
      NSpace,
      NStatistic,
      NGrid,
      NGridItem,
      NProgress
    },
    props: [ 'active', 'combatantInfo']
   }
</script>