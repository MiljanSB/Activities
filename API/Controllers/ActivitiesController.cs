using Application.Activities;
using Application.Core;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetActivities(CancellationToken ct)
        => HandleResult(await Mediator.Send(new List.Query(), ct));

        [HttpGet("{id}")]
        public async Task<IActionResult> GetActivity(Guid id)
        => HandleResult(await Mediator.Send(new Details.Query { Id = id }));

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity)
        => HandleResult(await Mediator.Send(new Create.Command { Activity = activity }));

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, Activity activity)
        {
            activity.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Activity = activity }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        => HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
    }
}