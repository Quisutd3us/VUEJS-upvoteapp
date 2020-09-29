const submissionComponent = {
    template:
        `
    <div style="display:flex; width: 100%">
            <figure class="media-left">
                <img :src="submission.submissionImage"
                     alt=""
                     class="image is-64x64">
            </figure>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>
                            <a :href="submission.url"
                               class="has-text-info">{{submission.title}}</a>
                            <span class="tag is-small">{{submission.id}}</span>
                        </strong>
                        <br>
                        <span>{{submission.description}}</span>
                        <br>
                        <small class="is-size-7">
                            Submitted By:
                            <img :src="submission.avatar"
                                 alt=""
                                 class="image is-24x24">
                        </small>
                    </p>
                </div>
            </div>
            <div class="media-right">
              <span class="icon is-small">
                <i class="fa fa-chevron-up"
                   @:click="upvote(submission.id)"></i>
                <strong class="has-text-info">{{submission.votes}}</strong>
              </span>
            </div>
    </div>`,
    props: ['submission', 'submissions'],
    methods: {
        upvote(submissionId) {
            console.log(submissionId)
            const submission = this.submissions.find(
                submission => submission.id === submissionId
            );
            console.log(submission)
            submission.votes++;
        }
    }
};

new Vue({
    el: '#app',
    data: {
        submissions: Seed.submissions
    },
    computed: {
        sortedSubmissions() {
            return this.submissions.sort((a, b) => {
                return b.votes - a.votes
            })
        }
    },
    methods: {},
    components: {
        'submission-component': submissionComponent
    }
});