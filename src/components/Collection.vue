<template>

<div id="main-wrapper">
					<div class="wrapper style2">
						<div class="inner">
							<div class="container">
								<div id="content">

									

										<article>
											<header class="major">
												<h2>Ma Collection</h2>
											</header>
											<div class='card-list'  v-for="card in cards" :key="card.id">
												<div class='card-title'><b>#1</b> {{card.id}} </div>
												<div class='card-action' ><a href='#'>👀</a></div>
											</div>
											<div class='card-list'>
												<div class='card-title'><b>#2</b> Card Title</div>
												<div class='card-action'><a  @click="goToCard(cards.id)">👀</a></div>
											</div> 

										</article>

								</div>
							</div>
						</div>
					</div>

				</div>

</template>

<script>
import {card} from '@/assets/js/card'


export default {
  name: 'Index',
  data:()=>({
    cards: card
  }),
  filters:{

  },
  methods:{
  goToCard (cardId) {
  this.$router.push({name:'CardDetail', params:{cardId}})
    }
  }
}

</script>

<style>

div.card-list{
    border-radius:8px;
    padding:8px;
    border:1px solid grey;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    margin-bottom:4px;
}

div.card-title{
    flex:6
}

div.card-action{
    flex:1
}
div.card-action a{
    outline: none;
    text-decoration: none;
}


</style>