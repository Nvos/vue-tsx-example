<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 30px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script lang="tsx">
import component from 'vue-class-component';
import * as tsx from 'vue-tsx-support';
import { Watch } from 'vue-property-decorator';

@component({})
export default class App extends tsx.Component<{}> {
  public text = '';

  @Watch('text')
  private onInput() {
    console.log(this.text);
  }

  private render() {
    return (
      <div>
        <nav id={'nav'}>
          <a href={'javascript:void()'}>Style test</a>
        </nav>
        <input
          type={'text'}
          placeholder={'Input your name'}
          v-model={this.text}
        />
      </div>
    );
  }
}
</script>
