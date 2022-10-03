<template>
  <n-popover :disabled="mode === 'HPS'" width="trigger" placement="top" :overlap="true" :show-arrow="false">
    <n-space :style="{ 'padding': '0 0 0 0', height: height - 16 + 'px' }">
      <n-tag strong size="small" :bordered="false">
        Crit: {{ combatantInfo.critHitPct }}
      </n-tag>
      <n-tag strong size="small" :bordered="false">
        Direct: {{ combatantInfo.directHitPct }}
      </n-tag>
      <n-tag strong size="small" :bordered="false">
        DirectCrit: {{ combatantInfo.directCritHitPct }}
      </n-tag>
    </n-space>
    <template #trigger>
      <n-grid :x-gap="20" :cols="11">
        <n-grid-item :span="4">
          <n-space vertical>
            <n-card :bordered="false" :header-style="{ 'padding': '16px 0 16px 0', height: height + 'px' }">
              <template #header>
                <n-space vertical>
                  <n-h3 v-if="mode === 'DPS'" prefix="bar" type="error" style="margin-right: 8px; margin-bottom: 0; text-align: center;">{{ combatantInfo.dps }}</n-h3>
                  <n-h3 v-if="mode === 'HPS'" prefix="bar" type="primary" style="margin-right: 8px; margin-bottom: 0; text-align: center;">{{ combatantInfo.hps }}</n-h3>
                </n-space>
              </template>
            </n-card>
          </n-space>
        </n-grid-item>
        <n-grid-item :span="7" >
          <n-grid :cols="height > 32 ? 1 : 3" style="height: 100%">
            <n-grid-item :span="1" style="b">
              <n-h6 style="margin-bottom: 0"> {{ playerName }} </n-h6>
            </n-grid-item>
            <n-grid-item :span="height > 32 ? 1 : 2" style="position: relative">
              <n-statistic :style="height > 32 ? { position: 'absolute', bottom: '1px' } : { position: 'absolute', right: '16px' }">
                <n-space>
                  <n-p v-if="mode === 'DPS'" style="margin-bottom: 0">{{ combatantInfo.maxHit }}</n-p>
                  <n-p v-if="mode === 'DPS'" style="margin-bottom: 0">{{ combatantInfo.maxHitDamage }}</n-p>
                  <n-p v-if="mode === 'HPS' && combatantInfo.maxHeal" style="margin-bottom: 0">{{ combatantInfo.maxHeal }}</n-p>
                  <n-p v-if="mode === 'HPS' && combatantInfo.maxHeal" style="margin-bottom: 0">{{ combatantInfo.maxHealDamage }}</n-p>
                </n-space>
              </n-statistic>
            </n-grid-item>
          </n-grid>
        </n-grid-item>
        <n-grid-item :span="11">
          <n-progress 
            v-if="mode === 'DPS'"
            color="salmon" 
            type="line" 
            :height="6"
            :processing="active"
            :border-radius="4"
            :fill-border-radius="0"
            :show-indicator="false"
            :percentage="parseInt(combatantInfo.damagePct.replace('%', ''))"
            style="margin: 0 0 0 0">
          </n-progress>
          <n-progress 
            v-if="mode === 'HPS'"
            color="lightseagreen" 
            type="line" 
            :height="6"
            :processing="active"
            :border-radius="4"
            :fill-border-radius="0"
            :show-indicator="false"
            :percentage="parseInt(combatantInfo.healsPct.replace('%', ''))"
            style="margin: 0 0 0 0">
          </n-progress>
        </n-grid-item>
      </n-grid>
    </template>
  </n-popover>
</template>

<script >
   import { NH3, NH6, NP, NCard, NTag, NSpace, NStatistic, NGrid, NGridItem, NProgress, NPopover } from 'naive-ui'
   import { floor } from 'lodash';
   
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
    props: [ 'active', 'combatantInfo', 'height', 'mode', 'primaryPlayer', 'blurPlayerNames' ],
    computed: {
      namePannelHeight() {
        return floor(this.height/3)
      },
      playerName() {
        var name = this.combatantInfo.name;
        if (this.blurPlayerNames) {
          console.log("should see this")
          name = this.combatantInfo.job.toUpperCase()
        } else if (this.combatantInfo.name === 'YOU') {
          name = this.primaryPlayer !== '' ? this.primaryPlayer : name
        }  
        return name
      }
    }
   }
</script>