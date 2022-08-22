<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  props: {
    width: {
      type: Number,
      default: 290,
    },
    height: {
      type: Number,
      default: 290,
    },
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 350);
    this.gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 350);

    this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
    this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

    this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
    this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
    this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");

    const undoneTask = this.$store.state.tasks?.filter(
      (item) => !item.completed
    ).length;

    const doneTask = this.$store.state.tasks.length - undoneTask;

    this.renderChart(
      {
        labels: ["Completo", "Incompleto"],
        datasets: [
          {
            backgroundColor: [this.gradient2, this.gradient],
            data: [doneTask, undoneTask],
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        width: 200,
        height: 200,
      }
    );
  },
};
</script>