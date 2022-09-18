<script lang="ts">
  import { count } from "../data-store";
  function changeNumber(number:number) {
    count.update(() => number);
  }
</script>

<div class="navigation">
  <ul>
    <li class="list" on:click="{()=>changeNumber(4)}">
      <a href="#">
        <span class="icon">
          <img
            src="resources/4letnie.png"
            alt="4 letnie"
            width="60"
            height="60"
          />
        </span>
        <span class="text">4 letnie</span>
      </a>
    </li>
    <li class="list" on:click="{()=>changeNumber(6)}">
      <a href="#">
        <span class="icon">
          <img
            src="./resources/6letnie.png"
            alt="6 letnie"
            width="60"
            height="60"
          />
        </span>
        <span class="text">6 letnie</span>
      </a>
    </li>
    <li class="list" on:click="{()=>changeNumber(10)}">
      <a href="#">
        <span class="icon">
          <img
            src="./resources/10letnie.png"
            alt="10 letnie"
            width="60"
            height="60"
          />
        </span>
        <span class="text">10 letnie</span>
      </a>
    </li>
    <li class="list" on:click="{()=>changeNumber(12)}">
      <a href="#">
        <span class="icon">
          <img
            src="./resources/12letnie.png"
            alt="12 letnie"
            width="60px"
            height="60px"
          /></span
        >
        <span class="text">12 letnie</span>
      </a>
    </li>
  </ul>
</div>

<style>
  :root {
    --clr: #5d4a68;
  }

  /* .navigation {} */

  .navigation ul {
    display: flex;
    width: auto;
    border-style: solid;
    border: 1px black;
  }

  .navigation ul li {
    position: relative;
    list-style: none;
    height: 70px;
    width: 70px;
    z-index: 1;
  }

  .navigation ul li a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-weight: 500;
  }

  .navigation ul li a .icon {
    position: relative;
    display: block;
    line-height: 75px;
    font-size: 1.5em;
    text-align: center;
    transition: 0.5s;
    color: var(--clr);
  }

  img {
    border-radius: 50%;
  }

  .navigation ul li:hover a .icon {
    transform: translateY(-15px);
  }

  .navigation ul li a .text {
    position: absolute;
    color: var(--clr);
    font-weight: 400;
    font-size: 0.75em;
    letter-spacing: 0.05em;
    transition: 0.5s;
    opacity: 0;
    transform: translateY(20px);
  }

  .navigation ul li:hover a .text {
    opacity: 1;
  }
</style>
